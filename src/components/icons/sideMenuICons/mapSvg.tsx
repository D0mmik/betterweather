export default function MapSvg(props : {color : string}) {
  return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.24512 14.7815L10.2383 10.8914L13.6524 13.5733L16.5815 9.79297" stroke={props.color} strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="19.9954" cy="4.19954" r="1.9222" stroke={props.color} strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round"/>
        <path
          d="M14.9248 3.12109H7.65704C4.6456 3.12109 2.77832 5.25382 2.77832 8.26526V16.3476C2.77832 19.3591 4.60898 21.4827 7.65704 21.4827H16.2612C19.2726 21.4827 21.1399 19.3591 21.1399 16.3476V9.30874"
          stroke={props.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
  );
}