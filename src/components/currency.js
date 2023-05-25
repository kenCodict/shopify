const currency = (price) => {
            let USDollar = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    });
            let value = USDollar.format(price)
            return value
}
export default currency