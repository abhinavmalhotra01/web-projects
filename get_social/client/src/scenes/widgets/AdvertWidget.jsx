import { Link, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4379f655-6c3f-4307-a5f8-3d98bc863560/day731g-6720f2f5-ddd4-4772-8736-f6b1a329ad13.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQzNzlmNjU1LTZjM2YtNDMwNy1hNWY4LTNkOThiYzg2MzU2MFwvZGF5NzMxZy02NzIwZjJmNS1kZGQ0LTQ3NzItODczNi1mNmIxYTMyOWFkMTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IvFQfoM79tqImoo9SL98-bc14dWSm1qYUQZt_D7mU8g"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>One Piece</Typography>
        <Typography
          // className={classes.title}
          variant="h6"
          noWrap
          component={Link}
          to="/"
          color={main}
        >
          <Link
            href="https://onepiecechapters.com/?tcb3"
            underline="none"
            color="yellow"
          >
            Read Now !!
          </Link>
        </Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        PEAK FICTION .
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
