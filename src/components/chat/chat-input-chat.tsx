import { ChatInput, type ChatInputProps } from "./chat-input";

type ChatInputChatProps = Omit<ChatInputProps, "variant" | "containerClassName"> & {
  containerClassName?: string;
};

export function ChatInputChat({ containerClassName = "", ...props }: ChatInputChatProps) {
  return (
    <ChatInput
      variant="wide"
      containerClassName={`max-w-[1100px] justify-end gap-4 ${containerClassName}`.trim()}
      {...props}
    />
  );
}
