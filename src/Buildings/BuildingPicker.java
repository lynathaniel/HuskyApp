package Buildings;
import java.util.*;
import java.io.File;
import java.io.FileNotFoundException;
public class BuildingPicker {

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
