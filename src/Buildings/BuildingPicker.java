package Buildings;

import java.util.*;
public class BuildingPicker {



public class Building {
    private String abrev;
    private String name;
    private double lat;
    private double longi;
    public building (String abrev, String name, double lat, double longi) {
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