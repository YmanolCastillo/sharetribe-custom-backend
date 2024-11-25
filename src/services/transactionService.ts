import sharetribeClient from "./sharetribeService";
import { fetchUsersByIds } from "./userService";

export const fetchTransactions = async (
  page = 1,
  perPage = 10
): Promise<any[]> => {
  const response = await sharetribeClient.get("/transactions/query", {
    params: { page, per_page: perPage },
  });

  const transactions = response.data.data;

  const userIds = Array.from(
    new Set(
      transactions.flatMap((transaction: any) => [
        transaction.attributes.protectedData?.buyerId,
        transaction.attributes.protectedData?.sellerId,
      ])
    )
  ).filter(Boolean);

  const users = await fetchUsersByIds(userIds as any);

  // Map de las transacciones con información de comprador y vendedor
  return transactions.map((transaction: any) => {
    const buyer =
      users.find(
        (user: any) => user.id === transaction.attributes.protectedData?.buyerId
      ) || {};
    const seller =
      users.find(
        (user: any) =>
          user.id === transaction.attributes.protectedData?.sellerId
      ) || {};

    return {
      id: transaction.id,
      buyer: buyer.name || "Unknown Buyer",
      seller: seller.name || "Unknown Seller",
      status:
        transaction.attributes.lastTransition ===
        "transition/inquire-without-payment"
          ? "pending"
          : transaction.attributes.lastTransition,
      createdAt: transaction.attributes.createdAt,
    };
  });
};
