import { notFound } from "next/navigation";
import React from "react";

// interface Props{
//     params:{id:number}
// }

interface Props {
  params: Promise<{ id: number }>;
}

const userDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  if(id > 10){
    notFound();
  }

  return <div>userDetailPage {id}</div>;
};

export default userDetailPage;
