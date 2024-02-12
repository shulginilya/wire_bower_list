import { Route, Routes } from 'react-router-dom';
import {
	Home,
	NotFound,
} from '@/pages';

export const Router = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
)
