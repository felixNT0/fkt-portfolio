import { useScrollToComponentContext } from "../../contexts/useScrollToComponentContext";
import OtherContactDetails from "./OtherContactDetails";
import SendMailForm from "./SendMailForm";

const Contact = () => {
  const { ScrollToContactRef } = useScrollToComponentContext();

  return (
    <div
      ref={ScrollToContactRef}
      className="contact w-full h-screen  p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <OtherContactDetails />
        <SendMailForm />
      </div>
    </div>
  );
};

export default Contact;
