/*
* Features that i have worked on :

    ?1. Sign in page: 
        Frontend for the sign in page.

    ?2. Loading page:
        Loader was done using CSS animation since MUI comp doesnt load by that time

    ?3. IndexedDB:
        Stored all the master files (almost 20mb) in the indexedDb but got stuck in an edge case that i came up with. So the feature has been put on hold.

    ?4. Pdf viewer:
        After testing with a number of libraries made a pdf viewer.

    ?5. Pdf page extractor:
        Made a node project that would upload pdf files from a folder and extract the first page of that file and download the file to a different folder.

    ?6. Merge line items:
        In the line item table merge the line that have similar description, uom and unit price also made the dialog box reusable.

    ?7. Bulk edit of the line item:
        Made the frontend along with mano akka.

    ?8. Duty calculation:
        Wrote node logic and  for BCD, ACD, AIDC, CHC, EXIM, IGST, NCCD and SWS. 
        dutyCalcOp => A table that stores all the duty calculated.
        mastersDataTable => Code optimization. Once the a hsn or notification data gets fetched it gets stored in the table so that the next time there is no need to make an API call.
        currencyConversion => Converts the currency by fetching the conversion rate from aws(also contributed by sashi)

    ?9. Converted text box to dropdown:
        In the line item bulk edit converted text fields to auto complete. There were a lot of bugs created in this task but assisted the people who solved it

    ?10. Removed lag in the checkbox:
        Since there were many API calls happening in the onchange of the checkbox there was a lag.
        Identified the bug and used onblur.

    ?11. N number of design QA

    ?12. Checklist API
        Designed a double row IGM table.
        Designed a template (latex and node) that creates single row tables(dynamic number of columns and dynamic column width) for generating checklist PDF
    

*/