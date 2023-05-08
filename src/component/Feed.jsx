import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../utils/client";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";
import { feedQuery, searchQuery } from "../utils/data";
const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState();
  const { categoryid } = useParams();

  useEffect(() => {
    setLoading(true);
    if (categoryid) {
      const query = searchQuery(categoryid);
      client.fetch(query).then((data) => {
        console.log(data);
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        console.log(data);
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryid]);
  if (loading) return <Spinner message="we are adding new ides to your feed" />;
  if (pins?.length === 0)
    return <h1 className="text-center">No pins available</h1>;
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
