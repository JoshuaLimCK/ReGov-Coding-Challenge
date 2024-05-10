"use client";

import { Button } from "@/components/ui/button";
import { CiEdit } from "react-icons/ci";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { signal } from "@preact/signals";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { saveDraft, saveSubmit } from "@/app/actions/user-about";

import { useState } from "react";
import { about, aboutSect } from "@/app/user/page";
import { User } from "@auth/core/types";
import { Textarea } from "@/components/ui/textarea";

interface AboutMeDialogProps {
  user:
    | (User & {
        about?: string | undefined;
        draft?: string | undefined;
      })
    | undefined;
}

export const AboutMeDialog = ({ user }: AboutMeDialogProps) => {
  const [open, setOpen] = useState(false);
  const userId = signal(user?.id as string);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <CiEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit About Me</DialogTitle>
          <DialogDescription>
            Make changes to your about me section here. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Label htmlFor="name">About Me</Label>
          <Textarea
            onBlur={(e) => {
              about.value = e.currentTarget.value;
            }}
            className="my-2"
            id="name"
            defaultValue={(user?.draft as string) || (user?.about as string)}
          />
        </div>
        <DialogFooter>
          <form
            action={async () => {
              await saveSubmit(userId.value, about.value).then((res) => {
                setOpen(false);
                aboutSect.value = res?.data?.about as string;
              });
            }}
          >
            <Button type="submit">Save and submit</Button>
          </form>
          <form
            action={async () => {
              await saveDraft(userId.value, about.value).then(() => {
                setOpen(false);
              });
            }}
          >
            <Button type="submit">Save as draft</Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
