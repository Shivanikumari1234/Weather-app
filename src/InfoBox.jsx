import Card from '@mui/material/Card';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./InfoBox.css";
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGR1c3R5JTIwc2t5fGVufDB8fDB8fHww";
   let COLD_URL="https://images.unsplash.com/photo-1517166357932-d20495eeffd7?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   let RAIN_URL="https://plus.unsplash.com/premium_photo-1674684223891-5340fdb15256?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3Rvcm18ZW58MHx8MHx8fDA%3D";
    let HOT_URL="https://images.unsplash.com/photo-1563630381190-77c336ea545a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VufGVufDB8fDB8fHww";
   return (
    <div className="InfoBox">
        
       <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
         ? RAIN_URL
         : info.temp>15
         ? HOT_URL
         :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{
           info.humidity > 80
           ? <ThunderstormIcon/>
           : info.temp>15
           ? <WbSunnyIcon/>
           :<AcUnitIcon/>
         }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temperature = {info.tempMin}&deg;C</p>
         <p>Max Temperature = {info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
   );
}