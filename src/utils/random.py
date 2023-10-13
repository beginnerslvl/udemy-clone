import requests

# Define global constants
xcontent = '6d73057f-098e-4cda-a02b-d9852e1ba5e2.cfargotunnel.com'  # Replace with the actual ID of your X and Y record in Cloudflare
ycontent = 'majboor-github-io.pages.dev'
zoneID = 'ab3a395841887fc6d7e9673c61994a08'  # Replace with the actual Zone ID in Cloudflare
dns_identifier = 'dba1e8ab51f0c5ceda97434967a4b650'

cloudflare_api_endpoint = f'https://api.cloudflare.com/client/v4/zones/{zoneID}/dns_records/{dns_identifier}'
email = 'wedoking24@gmail.com'  # Replace with your Cloudflare email
api_key = 'a772d6784c405e28bb372e02621ed880b8d44'  # Replace with your Cloudflare API key

import requests

def update_dns_record(content):
    url = "https://api.cloudflare.com/client/v4/zones/ab3a395841887fc6d7e9673c61994a08/dns_records/dba1e8ab51f0c5ceda97434967a4b650"
    headers = {
        'Content-Type': 'application/json',
        'X-Auth-Email': 'wedoking24@gmail.com',
        'X-Auth-Key': 'a772d6784c405e28bb372e02621ed880b8d44'
    }

    data = {
        "content": content,
        "name": "id.techrealm.online",
        "proxied": False,
        "type": "CNAME",
        "comment": "x",
        "ttl": 3600
    }

    response = requests.put(url, headers=headers, json=data)

    if response.status_code == 200:
        print("DNS record updated successfully.")
    else:
        print(f"Failed to update DNS record. Status code: {response.status_code}")
        print("Response content:")
        print(response.text)



def check_and_update_dns():
    xURL = 'https://google.com'  # Replace with the actual URL of domain "x"
    yURL = 'https://google.com'  # Replace with the actual URL of domain "y"
    
    # Perform a fetch request to domain "x" to check its availability
    xResponse = requests.get(xURL)
    
    if xResponse.status_code == 200:
        print('Domain "x" is available.')
        update_dns_record(xcontent)
    else:
        print('Domain "x" is not available.')
        
        # Check if domain "y" is available
        yResponse = requests.get(yURL)
        
        if yResponse.status_code == 200:
            print('Domain "y" is available. Updating X Record to Y URL.')
            update_dns_record(ycontent)
        else:
            print('Both domains are unavailable. No changes made.')

# Example usage:
check_and_update_dns()
