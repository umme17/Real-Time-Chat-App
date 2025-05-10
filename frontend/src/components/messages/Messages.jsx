import { useEffect, useRef } from "react";
import MessageSkeletor from "../skeletons/messageSkeleton"
import Message from "./Message";
import useGetMesages from "../../hooks/useGetMesages";
import useListenMessages from "../../hooks/useListenMessages";


const Messages = () => {
	const {messages, loading} = useGetMesages();
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({behaviour : "smooth"});
		},100);
	}, [messages]);

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading && 
			 messages.length > 0 &&
			 messages.map((message) =>(
				<div key = {message._id} ref = {lastMessageRef}>
					<Message message = {message}/>

				</div>
			 ))}
			 {loading && [...Array(3)].map((_,idx) => <MessageSkeletor key = {idx}/>)}
		     {!loading && messages.length == 0 &&(
				<p className= 'text-center'>Send a message to start conversation</p>
			 )}
		</div>
	);
};
export default Messages;