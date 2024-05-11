export default function WindSvg(props : {color : string}) {
  return (
    <div className="m-2">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.332 0C10.332 0 2.83203 7.04813 2.83203 12.4994C2.83203 16.6413 6.19016 20 10.332 20C14.4733 20 17.832 16.6413 17.832 12.4994C17.832 7.01438 10.332 0 10.332 0ZM10.332 18.75C6.88516 18.75 4.08203 15.9462 4.08203 12.4994C4.08203 8.9725 8.03016 4.14625 10.3339 1.75875C12.6377 4.13688 16.582 8.95063 16.582 12.4994C16.582 15.9462 13.7789 18.75 10.332 18.75Z"
          fill={props.color}/>
        <path
          d="M6.58203 12.2594C6.58203 12.2562 6.58266 12.2531 6.58266 12.25H5.33266C5.33266 12.2531 5.33203 12.2562 5.33203 12.2594C5.33203 15.0206 7.57078 17.26 10.332 17.26V16.01C8.26453 16.01 6.58203 14.3275 6.58203 12.2594Z"
          fill={props.color}/>
      </svg>
    </div>
  );
}