package Buildings;
import java.util.*;
public class BuildingPicker {
    public Building target;
    public void buildingChoice(Building[] arr) {
        Random rand = new Random();
        int ind = rand.nextInt(28);
        this.target = arr[ind];
    }

//isdcshjhj
    public static class Building {
        private String abrev;
        private String name;
        private double lat;
        private double longi;
        public building(String abrev, String name, double lat, double longi) {
            this.abrev = abrev;
            this.name = name;
            this.lat = lat;
            this.longi = longi;
        }
        public String getAbrev() {
            return abrev;
        }
        public String getName() {
            return name;
        }
        public double getLat() {
            return lat;
        }
    }
}