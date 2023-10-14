package Buildings;
import java.util.*;
import java.io.File;
import java.io.FileNotFoundException;
public class BuildingPicker {

    public Building[] createBuildings() throws FileNotFoundException{
        Building[] result = new Building[28];
        Scanner fileScan = new Scanner(new File("src\\Buildings\\buildings"));
        int tracker = 0;
        while(fileScan.hasNextLine()){
            String buildingInfo = fileScan.nextLine();
            // build out the info by seperating by commas
            String abrev = buildingInfo.substring(0, buildingInfo.indexOf(","));
            buildingInfo = buildingInfo.substring(abrev.length() + 1);

            String fullName = buildingInfo.substring(0, buildingInfo.indexOf(","));
            buildingInfo = buildingInfo.substring(fullName.length() + 1);

            String tempLogi = buildingInfo.substring(0, buildingInfo.indexOf(","));
            buildingInfo = buildingInfo.substring(tempLogi.length() + 1);

            String tempLongi = buildingInfo.substring(0);

            double logi = Double.parseDouble(tempLogi);
            double longi = Double.parseDouble(tempLongi);
            result[tracker] = new Building(abrev, fullName, logi, longi);
            tracker++;
        }

        return result;
    }
    
    public static class Building {
        private String abrev;
        private String name;
        private double lat;
        private double longi;

        public Building (String abrev, String name, double lat, double longi) {
            this.abrev = abrev;
            this.name = name;
            this.lat = lat;
            this.longi = longi;
        }

        public String getAbrev () {
            return abrev;
        }

        public String getName () {
            return name;
        }

        public double getLat () {
            return lat;
        }
    }
}
