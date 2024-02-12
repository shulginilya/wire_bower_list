import React, { Suspense } from "react";
import { createRoot } from 'react-dom/client';
import App from "@/App";
import {
	Spinner,
} from '@/components';
import 'sanitize.css';
import '@/styles/reset.scss';
import '@/styles/global.scss';

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Suspense fallback={<Spinner />}>
			<App />
		</Suspense>
	</React.StrictMode>
);
