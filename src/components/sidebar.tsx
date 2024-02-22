"use client";

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from "./ui/sheet";
import {
	HamburgerMenuIcon,
	FilePlusIcon,
	FileIcon,
	TrashIcon,
	DownloadIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

import { DialogTrigger } from "./ui/dialog";
import { SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";


export function Sidebar() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size="icon">
					<span className="sr-only">Open Preferences</span>
					<HamburgerMenuIcon className="h-5 w-5" />
				</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle>Menu</SheetTitle>
				</SheetHeader>
				<div className="grid w-full gap-1.5">
					<Button
						className="justify-start text-left"
					>
						<FilePlusIcon className="mr-2 h-4 w-4" /> Create New Draft
					</Button>
					<h2 className="text-lg font-semibold text-foreground">Drafts</h2>
					<div className="flex w-full flex-row" >
						<Button
							className="grow justify-start text-left"
							variant="secondary"
							asChild
						>
							<Link
								to="#"
								className="rounded-br-none rounded-tr-none align-middle"
							>
								<span className="inline-flex">
									<FileIcon className="mr-2 inline h-4 w-4" />{" "}
									Demo
								</span>
							</Link>
						</Button>
						<Button
							variant="secondary"
							className="rounded-none px-2"

						>
							<DownloadIcon className="h-4 w-4" />
							<span className="sr-only">Download Draft</span>
						</Button>
						<Dialog>
							<DialogTrigger asChild>
								<Button
									variant="destructive"
									className="rounded-bl-none rounded-tl-none  px-2"
								>
									<TrashIcon className="h-4 w-4" />
									<span className="sr-only">Delete Draft</span>
								</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									Are you sure you want to delete the file?
								</DialogHeader>
								<DialogDescription>
									You will not be able to recover it.
								</DialogDescription>
								<div>
									<Button
										variant={"destructive"}
									>
										Yes, I am Sure
									</Button>
								</div>
							</DialogContent>
						</Dialog>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
