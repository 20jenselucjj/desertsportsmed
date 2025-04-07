# PowerShell script to update HTML files with the new page-header-fix.css file

# List of HTML files to update
$htmlFiles = @(
    "performance-therapy.html",
    "semi-private-training.html",
    "online-training.html",
    "about.html",
    "pricing-request.html",
    "contact.html",
    "index.html",
    "free-intro.html"
)

foreach ($file in $htmlFiles) {
    if (Test-Path $file) {
        Write-Host "Processing $file..."
        
        # Read the file content
        $content = Get-Content $file -Raw
        
        # Check if the file already has the page-header-fix.css
        if ($content -match "page-header-fix.css") {
            Write-Host "  $file already has page-header-fix.css"
        } else {
            # Find the position to insert the new CSS link
            # Look for the last CSS link before any script tags
            if ($content -match '(.*<link rel="stylesheet" href="assets/css/[^"]+\.css">)([^<]*<script)') {
                $before = $matches[1]
                $after = $matches[2]
                
                # Insert the new CSS link
                $newContent = $before + "`n    <link rel=""stylesheet"" href=""assets/css/page-header-fix.css"">" + $after
                
                # Update the file
                $newContent | Set-Content $file -NoNewline
                Write-Host "  Added page-header-fix.css to $file"
            } else {
                Write-Host "  Could not find insertion point in $file"
            }
        }
    } else {
        Write-Host "File $file not found"
    }
}

Write-Host "Update complete!"
