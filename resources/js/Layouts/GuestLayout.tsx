import Navbar from '@/Components/Navbar';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="mt-10 flex">
            <Navbar />
            <div className="flex-1">{children}</div>
        </div>
    );
}
