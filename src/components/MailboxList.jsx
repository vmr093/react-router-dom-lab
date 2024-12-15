import { Link } from "react-router-dom";
const MailboxList = ({ mailboxes }) => {
    return (
      <>
        <h1>Mailbox List</h1>
        {mailboxes.length === 0 ? (
          <p>Mailbox Not Found!</p>
        ) : (
          <ul>
            {mailboxes.map((mailbox) => (
              <li key={mailbox._id}>
                <Link to={`/mailboxes/${mailbox._id}`}>
                  Mailbox{mailbox._id}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );

};



export default MailboxList;