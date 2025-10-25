import React from "react";

// interface Props{
//     params:{id:number}
// }

interface Props {
  params: Promise<{ id: string }>;
}

const userDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  return <div>userDetailPage {id}</div>;
};

export default userDetailPage;
