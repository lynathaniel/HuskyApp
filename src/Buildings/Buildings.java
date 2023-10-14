package Buildings;

public class Buildings {
    public static boolean nearBuilding(Building building, double longitude, double latitude) {
        double normalLongitude = Math.floor(building.getLongi());
        double normalLatitude = Math.floor(building.getLat());
        return (longitude <  normalLongitude + 10.0 && longitude > normalLongitude - 10.0
                && latitude < normalLatitude + 10.0 && latitude > normalLatitude - 10.0);
    }
    
    public static String building(Building building) {
        return building.getName();
    }
}
