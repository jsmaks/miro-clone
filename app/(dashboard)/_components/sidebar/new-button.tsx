'use client';

import { Plus } from 'lucide-react';
import { CreateOrganization } from '@clerk/nextjs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const NewButton = () => {
  return (
    <Dialog>
          <DialogTrigger asChild>
              <div className='aspect-square'>
                  <button className='bg-white/25 h-full w-full'>
                      <Plus className='text-white' />
                  </button>
              </div>
      </DialogTrigger>
    </Dialog>
  );
};

export default NewButton;
