import axios from "../../axios";
import React, { useEffect, useState, FC } from "react";
import { IComment } from "src/models/comment.model";
import Comment from "../Misc/Comment";
import { ITopic } from "src/models/topic.model";
import AddComment from "../Home/feed-components/AddComment";
import Button from "../Home/feed-components/Button";
import "../Home/home.scss";
import { IUser } from "src/models/user.model";
import { Avatar } from "@mui/material";
import moment from "moment";

interface ITopicProps {
  topic: ITopic;
  onAdd: any;
  allUsers: IUser[];
  user: IUser;
}

const Topic: FC<ITopicProps> = ({ topic, onAdd, allUsers, user }) => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = () => {
    axios
      .get<IComment[]>(`Comment/GetOneTopicAllComment/${topic.topicID}`)
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const normalizeUserName = (name: string) => {
    return name.toLowerCase().replace(/\s/g, "");
  };

  return (
    <div className="flex w-full mt-4 p-4 rounded-lg shadow-md">
      <Avatar style={{ backgroundColor: "#b9b9b9" }} />
      <div className="flex flex-col w-full ml-2">
        <div className="flex h-10 pt-2">
          <h2 className="font-bold tracking-wide">{user.fullName}&nbsp;</h2>
          {user.fullName && (
            <p className="text-gray-400 space-x-6">
              @{normalizeUserName(user.fullName)} · {topic.offeredCoins} coin{/*  ·{" "}
              {+moment(topic.creationDate).format("d") > 0
                ? `${moment(topic.creationDate).format("d")} napja`
                : +moment(topic.creationDate).format("h") > 1
                ? `${moment(topic.creationDate).format("h")} órája`
                : `${moment(topic.creationDate).format("m")} perce`} */}
            </p>
          )}
        </div>
        <p>{topic.topicName}</p>
        {topic.attachmentUrl}

        <div className="mt-4">
          {comments &&
            comments.map((comment, i) => (
              <div key={i}>
                <Comment comment={comment} allUsers={allUsers} />
              </div>
            ))}
        </div>
        {/*
          <Button
            onClicked={() => setShowAdd(!showAdd)}
            color={showAdd ? "#FAB001" : "#182A4E"}
            text={showAdd ? "Mégse" : "Új hozzászólás írása"}
          />
 */}

        <AddComment refresh={getComments} topic={topic} />
      </div>
    </div>
  );
};

export default Topic;
