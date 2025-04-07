$htmlFiles = Get-ChildItem -Path . -Filter "*.html"

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Update address in footer
    $content = $content -replace '<p><i class="fas fa-map-marker-alt"></i> 123 Sports Medicine Way, St. George, UT 84770</p>', '<p><i class="fas fa-map-marker-alt"></i> St. George, UT 84770</p>'
    
    # Write the updated content back to the file
    Set-Content -Path $file.FullName -Value $content
}

Write-Host "Address updated in all HTML files."
