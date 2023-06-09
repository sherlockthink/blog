"use client";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItemData from "../../constrains/listdata";

const index = () => {
  return (
    <List
      className="h-[85vh] rounded-lg overflow-auto relative"
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >

      <h1 className="text-2xl font-bold text-center sticky bg-white pb-2 pt-1 shadow opacity-100 -top-2 left-10 z-10">Top Posts</h1>
      {ListItemData.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                variant="square"
                sx={{ width: 76, height: 56, marginRight: 2 }}
                alt="Avatar"
                src={item.avatarSrc}
              />
            </ListItemAvatar>
            <ListItemText
              primary={item.primaryText}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.secondaryText}
                  </Typography>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.date}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default index;
