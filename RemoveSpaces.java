// 4. Write a code to Remove the spaces found in a string?

public class RemoveSpaces {
    public static String removeSpaces(String input) {
        // Remove spaces using regular expression
        return input.replaceAll("\\s", "");
    }

    public static void main(String[] args) {
        String input = "Hello World Java Code";
        String result = removeSpaces(input);
        System.out.println("String after removing spaces: " + result);
    }
}
