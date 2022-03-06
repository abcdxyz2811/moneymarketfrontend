import React from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EditIcon from '@material-ui/icons/Edit';
  
const style = {
    margin: 0,
    right: 3,
    bottom: 2,
    position: 'fixed',
};
  
const actions = [
    { icon: <GitHubIcon style={{ fill: '#000000' }} />, 
    name: 'GitHub', link: "https://www.google.com/" },
    { icon: <LinkedInIcon style={{ fill: '#000000' }} />, 
    name: 'LinkedIn', link: "https://www.google.com/" },
    { icon: <TwitterIcon style={{ fill: '#000000' }} />, 
    name: 'Twitter', link: "https://www.google.com/" },
    { icon: <InstagramIcon style={{ fill: '#000000' }} />, 
    name: 'Instagram', link: "https://www.google.com/" },
];
  
export default function Speeddial() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <SpeedDial
                ariaLabel="SpeedDial openIcon example"
                style={style}
                hidden={false}
                icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={handleClose}
                        href={action.link}
                    />
                ))}
            </SpeedDial>
        </div>
    );
}