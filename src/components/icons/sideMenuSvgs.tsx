import DashboardSvg from "@/components/icons/sideMenuICons/dashboardSvg";
import MapSvg from "@/components/icons/sideMenuICons/mapSvg";
import SavedSvg from "@/components/icons/sideMenuICons/savedSvg";
import CalendarSvg from "@/components/icons/sideMenuICons/calendarSvg";
import SettingsSvg from "@/components/icons/sideMenuICons/settingsSvg";

export default function SideMenuSvgs(props: { name: string, color: string }) {
  let svgElement = null;

  if (props.name === 'dashboard') {
    svgElement = <DashboardSvg color={props.color}/>;
  } else if (props.name === 'map') {
    svgElement = <MapSvg color={props.color}/>;
  } else if (props.name === 'saved') {
    svgElement = <SavedSvg color={props.color}/>;
  } else if (props.name === 'calendar') {
    svgElement = <CalendarSvg color={props.color}/>;
  } else if (props.name === 'settings') {
    svgElement = <SettingsSvg color={props.color}/>;
  } else {
    svgElement = null
  }

  return (
    <div className="p-3 m-2">
      {svgElement}
    </div>);
}
