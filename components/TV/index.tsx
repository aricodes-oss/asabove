import classes from './TV.module.scss';

export interface TVProps {
  width?: number;
  height?: number;
}

export default function TV() {
  return (
    <div className={classes.root}>
      <iframe
        src="https://www.youtube.com/embed/tmHkkbK-4U8"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className={classes.iframe}
      />
    </div>
  );
}
