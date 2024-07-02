'use client';

import { Plus } from 'lucide-react';
import { CreateOrganization } from '@clerk/nextjs';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <button className="flex h-full w-full items-center justify-center rounded-md bg-white/25 opacity-60 transition hover:opacity-100">
            <Plus className="text-white" />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white p-0 justify-center">
        <DialogTitle className="hidden">Create New Organization</DialogTitle>
        <DialogDescription className="hidden">
          Provide details to create a new organization.
        </DialogDescription>
        <CreateOrganization routing="hash"  />
      </DialogContent>
    </Dialog>
  );
};
