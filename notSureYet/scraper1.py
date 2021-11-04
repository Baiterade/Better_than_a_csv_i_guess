import requests 
from bs4 import BeautifulSoup
import csv

URL = 'https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=legos&_sacat=0&LH_TitleDesc=0&_odkw=minecraft+legos&_osacat=0'

# get web data
page = requests.get(URL)

if page.ok:

    print('Response ok')

    # parse web data
    soup = BeautifulSoup(page.content, "html.parser")

    parents = soup.find_all(class_ = "s-item__info")

    print(parents)

    for parent in parents:
        
        try:

            title = parent.find(class_ = 's-item__title').get_text()

            score = parent.find(class_ = 's-item__price').get_text()

            with open('C:/Users/jager/bootcamp/repos/notSureYet/output.csv', 'a', newline='') as csvfile:
                writer = csv.writer(csvfile)
                writer.writerow([title, score])
            
        except AttributeError:

            print("DATA EXPUNGED")

        except UnicodeEncodeError:
    
            print("DATA EXPUNGED")