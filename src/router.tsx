import { Route, Routes } from 'react-router-dom';
import {
	Home,
	NotFound,
    DemoPage,
} from '@/pages';

export const Router = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
)
