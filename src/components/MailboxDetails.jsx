import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const [mailboxDetail, setMailboxDetail] = useState({});
 console.log("mailboxes:", JSON.stringify(mailboxes));


  useEffect(() => {
    const mailboxDetailById = mailboxes.find(
      (item) => item._id === Number(mailboxId)
    );

    setMailboxDetail(mailboxDetailById || {});
    console.log(`mailboxDetailById${mailboxDetailById}`);
  }, [mailboxes, mailboxId]);

  return (
    <>
      <div>
        <h1>Details</h1>
        <h2>MailboxId:{mailboxDetail._id}</h2>
        <h2>BoxHolder:{mailboxDetail.boxHolder}</h2>
        <h2>BoxSize:{mailboxDetail.boxSize}</h2>
      </div>
    </>
  );
};

export default MailboxDetails;