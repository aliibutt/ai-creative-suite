import { Avatar, AvatarImage } from "./ui/avatar";

export const BotAvatar = () => {
    return (
        <Avatar className="h-10 w-10">
            <AvatarImage className="p-1" src="/favicon.svg"/>
        </Avatar>
    );
}