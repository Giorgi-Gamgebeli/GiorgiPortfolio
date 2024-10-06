import { useMutation } from "@tanstack/react-query";
import { sendEmailApi } from "../_lib/EmailJs";
import { toast } from "react-hot-toast";

function useSendEmail(
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const { mutate: sendEmail } = useMutation({
    mutationFn: sendEmailApi,
    onSuccess: () => {
      toast.success("I have received your message, will contact you soon!");
      setLoading(false);
    },
    onError: (err) => {
      toast.error("Something went wrong, please try again later");
      console.error(err);
      setLoading(false);
    },
  });

  return { sendEmail };
}

export default useSendEmail;
