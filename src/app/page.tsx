import { Header } from "@/components/header";

export const metadata = {
	title: "Markdone | Get more things done with markdone!",
};

export default function HomePage() {
	return (
		<>
			<Header />
			<main className="container flex h-[calc(100%-4rem)] flex-col justify-center bg-background font-sans text-foreground">
				<div className="self-center">
					<h1 className="scroll-m-20 text-center text-2xl font-semibold">
						You have no files open, <br />
						click on the menu to open a file
					</h1>
				</div>
			</main>
		</>
	);
}