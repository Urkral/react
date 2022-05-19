import Author from './Autor';
import Avatar from './Avatar';
import { LikeIcon, MoreOptionIcon, ReplyIncon, RetweetIcon } from './Iconbuttons';
import Message from './Message';
import Time from './Time';

const Tweet = () => (
  <div className="flex items-center border-gray-300 m-8">
    <Avatar />
    <div className="space-y-1 text-lg font-medium leading-6">
      <Author />
      <Time />
      <Message />
      <div className="flex pt-3 space-x-3">
        <ReplyIncon />
        <RetweetIcon />
        <LikeIcon />
        <MoreOptionIcon />
      </div>
    </div>
  </div>
);

export default Tweet;
