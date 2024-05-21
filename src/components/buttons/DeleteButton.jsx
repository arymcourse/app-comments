import { TrashIcon } from "@heroicons/react/24/outline";
import { Context } from "../../context/AppContext";
import { Fragment, useContext, useState } from "react";
import { deleteComment } from "../../store/actions";
import { Description, Dialog, DialogPanel, DialogTitle, Transition, } from '@headlessui/react'


const DeleteButton = ({ id }) => {

	const { edit, dispatch } = useContext(Context);
	const [isOpen, setIsOpen] = useState(false);

	const clickHandler = () => {
		setIsOpen(true);
	}

	const confirmHandler = () => {
		deleteComment(dispatch, id);
		setIsOpen(false);
	};

	const cancelHandler = () => {
		setIsOpen(false);
	}

	const isDisabled = edit.id === id;

	return (

		<div>

			<button
				type="button"
				onClick={clickHandler}
				disabled={isDisabled}
				className={`flex gap-2 items-center text-red-400 font-bold text-sm ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
			>
				<TrashIcon className="w-3.5 h-3.5" />
				<span>Delete</span>
			</button>

			<Transition
				show={isOpen} as={Fragment}
				enter="transition-opacity duration-150"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-150"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>

				<Dialog open={isOpen} onClose={() => setIsOpen(false)} className='relative z-50' >

					<div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-slate-900 bg-opacity-60">

						<DialogPanel className='max-w-sm flex flex-col gap-5 border bg-white p-8 rounded-2xl shadow-md'>

							<DialogTitle className='font-semibold text-xl' >
								Delete comment
							</DialogTitle>

							<Description className='text-gray-600' >
								Are you sure want to delete this comment? This will remove the comment and can not be undone.
							</Description>

							<div className="self-center flex gap-4">
								<button className="bg-gray-500 py-3 px-5 rounded-lg uppercase text-white shadow font-semibold" onClick={cancelHandler}>No, cancel</button>
								<button className="bg-red-400 py-3 px-5 rounded-lg uppercase text-white shadow font-semibold" onClick={confirmHandler}>Yes, delete</button>
							</div>

						</DialogPanel>

					</div>

				</Dialog>

			</Transition>

		</div>
	)

};

export default DeleteButton;