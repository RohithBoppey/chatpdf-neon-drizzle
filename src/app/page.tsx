import { Button } from "@/components/ui/button";

import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
	const { userId } = auth();
	const isAuthenticated = !!userId; // checks if undefined or null and return false if not auth

	return (
		<div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<div className="flex flex-col items-center text-center">
					<div className="flex items-center">
						<h1 className="mr-3 text-5xl font-semibold">
							Chat with any PDF
						</h1>
						<UserButton afterSignOutUrl="/" />
					</div>
					<div className="flex mt-2">
						{isAuthenticated && (
							<>
								<Button>Go to Chats</Button>
							</>
						)}
					</div>
					<div className="w-full mt-4">
						{isAuthenticated ? (
							<h1>fileUploadComponent</h1>
						) : (
							<Link href="/sign-in">
								<Button>Login / Signup</Button>
							</Link>
						)}
					</div>
					<p className="max-w-xl mt-1 text-lg text-slate-600">
						Join millions of students, researchers and professinals
						to instantly anwer questions and understand research
						with AI
					</p>
				</div>
			</div>
		</div>
	);
}
