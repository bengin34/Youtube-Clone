import { Box } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Videos, ChannelCard } from "./";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  console.log(channelDetail, videos);
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
    <Box>
      <div
        style={{
          background: "rgb(99,101,53)",
          background:
            "linear-gradient(17deg, rgba(99,101,53,1) 18%, rgba(36,0,0,1) 51%, rgba(212,0,255,1) 83%)",
          zIndex: 10,
          height: "300px",
        }}
      >
        <ChannelCard channelDetail={channelDetail} />
      </div>
    </Box>
          <Box sx={{
            mr:{sm: '100px'}
          }}>
            <Videos videos={videos} />

          </Box>

    </Box>
  );
};

export default ChannelDetail;
