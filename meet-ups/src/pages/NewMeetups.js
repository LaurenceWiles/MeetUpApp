import NewMeetupForm from "../components/layout/layout/layout/meetups/NewMeetupForm";
import { useNavigate } from "react-router";

const NewMeetupsPage = () => {
  const navigate = useNavigate();

  const addMeetupHandler = (meetupData) => {
    fetch("https://meetupsapp-44049-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupsPage;
