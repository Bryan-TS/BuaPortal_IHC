import { Avatar, Card, CardContent, CardHeader, Container, Grid, Typography, CircularProgress, Box, ListItemIcon, Checkbox, List, FormGroup, FormControlLabel  } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MailIcon from '@material-ui/icons/Mail';
import BallotIcon from '@material-ui/icons/Ballot';
// import CropSquareIcon from '@material-ui/icons/CropSquare';
import { makeStyles } from '@material-ui/core';
import { amber, blue, green, grey } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
    container:{
        marginTop: "10px"
    },
    avatarAssignmentIcon:{
        backgroundColor: blue[500]   
    },
    avatarMailIcon:{
        backgroundColor: amber[500]   
    },
    avatarBallotIcon:{
        backgroundColor: green[500]           
    },
    circleProgress:{
        backgroundColor: grey[50],
        color: "black"        
    },
    cardHeader:{
        backgroundColor: grey[900],
        color: "white"
    }
}));

const DashBoard = () => {
    const classes = useStyles();
    return (
        <Container className = {classes.container}>
            <Grid container  spacing = {2}>
                <Grid item xs={6} sm={6}>
                    <Card>
                        <CardHeader
                            className = {classes.cardHeader}
                            avatar = {
                                <Avatar className = {classes.avatarAssignmentIcon}>
                                    <AssignmentIcon/>
                                </Avatar>
                            }
                            titleTypographyProps = {
                               {
                                   variant: "h6"
                               }
                            }
                            title = "List to do"
                        />
                        <CardContent>
                            <Typography variant="body1" color="initial">
                                <List>                                    
                                    <ListItemIcon>                                        
                                        <FormGroup column>
                                            <FormControlLabel
                                            control={<Checkbox name="checkedA" />}
                                            label="Task 1"
                                            />
                                            <FormControlLabel
                                            control={<Checkbox name="checkedA" />}
                                            label="Task 2"
                                            />
                                            <FormControlLabel
                                            control={<Checkbox name="checkedA" />}
                                            label="Task 3"
                                            />
                                        </FormGroup>                                        
                                    </ListItemIcon>
                                </List>
                            </Typography>
                        </CardContent>
                    </Card>

                    
                </Grid>

                <Grid item xs={6} sm={6}>
                    <Card>
                        <CardHeader
                            className = {classes.cardHeader}
                            avatar = {
                                <Avatar className = {classes.avatarMailIcon}>
                                    <MailIcon/>
                                </Avatar>
                            }
                            titleTypographyProps = {
                               {
                                   variant: "h6"
                               }
                            }
                            title = "Messages to you"
                        />
                        <CardContent>
                            <Typography variant="body1" color="initial">
                                Any content
                            </Typography>
                        </CardContent>
                    </Card>

                    
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Card>
                        <CardHeader
                            className = {classes.cardHeader}
                            avatar = {
                                <Avatar className = {classes.avatarBallotIcon}>
                                    <BallotIcon/>
                                </Avatar>
                            }
                            titleTypographyProps = {
                               {
                                   variant: "h6"
                               }
                            }
                            title = "Pending courses"
                        />
                        <CardContent display = "inline-flex">  
                            <Grid container  spacing = {2}>

                                <Grid item xs={12} sm={4}>                      
                                    <Card>
                                        <CardHeader
                                            className = {classes.cardHeader}
                                            avatar = {
                                                <Avatar >
                                                    <Box position="relative" display="inline-flex" justifyContent="center" className = {classes.circleProgress}>
                                                        <CircularProgress color = "primary" variant="determinate" thickness = {4} value = {50}/>
                                                        <Box
                                                            top={0}
                                                            left={0}
                                                            bottom={0}
                                                            right={0}
                                                            position="absolute"
                                                            display="flex"
                                                            alignItems="center"
                                                            justifyContent="center"
                                                        >
                                                            <Typography variant="caption" component="div" color="black">{`${Math.round(
                                                            50,
                                                            )}%`}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Avatar>
                                                
                                            }
                                            titleTypographyProps = {
                                            {
                                                variant: "h6"
                                            }
                                            }
                                            title = "Course title"
                                            
                                        />
                                        <CardContent>
                                            <Typography variant="body1" color="initial"><b>Last chapter watched: </b></Typography>
                                            <Typography variant="body1" color="initial">Chapter title</Typography>                                        
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={4}>                      
                                    <Card>
                                        <CardHeader
                                            className = {classes.cardHeader}
                                            avatar = {
                                                <Avatar >
                                                    <Box position="relative" display="inline-flex" justifyContent="center" className = {classes.circleProgress}>
                                                        <CircularProgress color = "primary" variant="determinate" thickness = {4} value = {65}/>
                                                        <Box
                                                            top={0}
                                                            left={0}
                                                            bottom={0}
                                                            right={0}
                                                            position="absolute"
                                                            display="flex"
                                                            alignItems="center"
                                                            justifyContent="center"
                                                        >
                                                            <Typography variant="caption" component="div" color="black">{`${Math.round(
                                                            65,
                                                            )}%`}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Avatar>
                                                
                                            }
                                            titleTypographyProps = {
                                            {
                                                variant: "h6"
                                            }
                                            }
                                            title = "Course title"
                                            
                                        />
                                        <CardContent>
                                            <Typography variant="body1" color="initial"><b>Last chapter watched: </b></Typography>
                                            <Typography variant="body1" color="initial">Chapter title</Typography>                                        
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={4}>                      
                                    <Card>
                                        <CardHeader
                                            className = {classes.cardHeader}
                                            avatar = {
                                                <Avatar >
                                                    <Box position="relative" display="inline-flex" justifyContent="center" className = {classes.circleProgress}>
                                                        <CircularProgress color = "primary" variant="determinate" thickness = {4} value = {15}/>
                                                        <Box
                                                            top={0}
                                                            left={0}
                                                            bottom={0}
                                                            right={0}
                                                            position="absolute"
                                                            display="flex"
                                                            alignItems="center"
                                                            justifyContent="center"
                                                        >
                                                            <Typography variant="caption" component="div" color="black">{`${Math.round(
                                                            15,
                                                            )}%`}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Avatar>
                                                
                                            }
                                            titleTypographyProps = {
                                            {
                                                variant: "h6"
                                            }
                                            }
                                            title = "Course title"
                                            
                                        />
                                        <CardContent>
                                            <Typography variant="body1" color="initial"><b>Last chapter watched: </b></Typography>
                                            <Typography variant="body1" color="initial">Chapter title</Typography>                                        
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={4}>                      
                                    <Card>
                                        <CardHeader
                                            className = {classes.cardHeader}
                                            avatar = {
                                                <Avatar >
                                                    <Box position="relative" display="inline-flex" justifyContent="center" className = {classes.circleProgress}>
                                                        <CircularProgress color = "primary" variant="determinate" thickness = {4} value = {23}/>
                                                        <Box
                                                            top={0}
                                                            left={0}
                                                            bottom={0}
                                                            right={0}
                                                            position="absolute"
                                                            display="flex"
                                                            alignItems="center"
                                                            justifyContent="center"
                                                        >
                                                            <Typography variant="caption" component="div" color="black">{`${Math.round(
                                                            23,
                                                            )}%`}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Avatar>
                                                
                                            }
                                            titleTypographyProps = {
                                            {
                                                variant: "h6"
                                            }
                                            }
                                            title = "Course title"
                                            
                                        />
                                        <CardContent>
                                            <Typography variant="body1" color="initial"><b>Last chapter watched: </b></Typography>
                                            <Typography variant="body1" color="initial">Chapter title</Typography>                                        
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={4}>                      
                                    <Card>
                                        <CardHeader
                                            className = {classes.cardHeader}
                                            avatar = {
                                                <Avatar >
                                                    <Box position="relative" display="inline-flex" justifyContent="center" className = {classes.circleProgress}>
                                                        <CircularProgress color = "primary" variant="determinate" thickness = {4} value = {42}/>
                                                        <Box
                                                            top={0}
                                                            left={0}
                                                            bottom={0}
                                                            right={0}
                                                            position="absolute"
                                                            display="flex"
                                                            alignItems="center"
                                                            justifyContent="center"
                                                        >
                                                            <Typography variant="caption" component="div" color="black">{`${Math.round(
                                                            42,
                                                            )}%`}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Avatar>
                                                
                                            }
                                            titleTypographyProps = {
                                            {
                                                variant: "h6"
                                            }
                                            }
                                            title = "Course title"
                                            
                                        />
                                        <CardContent>
                                            <Typography variant="body1" color="initial"><b>Last chapter watched: </b></Typography>
                                            <Typography variant="body1" color="initial">Chapter title</Typography>                                        
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={4}>                      
                                    <Card>
                                        <CardHeader
                                            className = {classes.cardHeader}
                                            avatar = {
                                                <Avatar >
                                                    <Box position="relative" display="inline-flex" justifyContent="center" className = {classes.circleProgress}>
                                                        <CircularProgress color = "primary" variant="determinate" thickness = {4} value = {5}/>
                                                        <Box
                                                            top={0}
                                                            left={0}
                                                            bottom={0}
                                                            right={0}
                                                            position="absolute"
                                                            display="flex"
                                                            alignItems="center"
                                                            justifyContent="center"
                                                        >
                                                            <Typography variant="caption" component="div" color="black">{`${Math.round(
                                                            5,
                                                            )}%`}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Avatar>
                                                
                                            }
                                            titleTypographyProps = {
                                            {
                                                variant: "h6"
                                            }
                                            }
                                            title = "Course title"
                                            
                                        />
                                        <CardContent>
                                            <Typography variant="body1" color="initial"><b>Last chapter watched: </b></Typography>
                                            <Typography variant="body1" color="initial">Chapter title</Typography>                                        
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    
                </Grid>
            </Grid>
            {/* <Grid container spacing = {2}>
                
            </Grid> */}
        </Container>       
    );
};

export default DashBoard;