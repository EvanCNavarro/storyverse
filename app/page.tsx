import { redirect } from 'next/navigation';

export default function Home() {
  // Simple redirect to auth page - this follows the frontend-first approach
  // where authentication is the first step
  redirect('/auth');
}
