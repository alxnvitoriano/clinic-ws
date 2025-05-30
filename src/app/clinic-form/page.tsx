import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ClinicForm from "./components/form";

const ClinicFormPage = () => {
  return (
    <div>
      <Dialog open>
        <form>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Adicione uma clínica para continuar.
              </DialogDescription>
            </DialogHeader>
            <ClinicForm />
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};

export default ClinicFormPage;
