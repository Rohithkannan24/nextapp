import React from "react";

//----- This is work only next v 13,14 
// interface Props {
//   params: { id: number; photoId: number; };
// }

//for next v15,16
interface Props {
 params: Promise<{ id: string; photoId: string }>
 }

const photoPage = async({ params }: Props) => {
   const { id, photoId } = await params;
  return <div>photoPage {id} {photoId}</div>;
};

export default photoPage;
