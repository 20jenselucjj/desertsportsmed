$htmlFiles = Get-ChildItem -Path . -Filter "*.html" -Exclude "free-intro.html"

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Update navigation menu
    $content = $content -replace '<li><a href="contact.html">Contact</a></li>', '<li><a href="free-intro.html">Free Intro</a></li>'
    
    # Update footer links
    $content = $content -replace '<li><a href="contact.html">Contact</a></li>', '<li><a href="free-intro.html">Free Intro</a></li>'
    
    # Write the updated content back to the file
    Set-Content -Path $file.FullName -Value $content
}

Write-Host "Navigation updated in all HTML files."
