// Alternativa usando Netlify Forms
const handleSubmitNetlify = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
        const formData = new FormData(e.target);
        
        await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        });
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
    } catch (error) {
        console.error('Error:', error);
        setSubmitStatus('error');
    } finally {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
    }
};

// En el formulario, agregar estos atributos:
<form 
    className="contact-form-wrapper" 
    onSubmit={handleSubmitNetlify}
    name="contact"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
>
    <input type="hidden" name="form-name" value="contact" />
    {/* resto de los campos */}
</form>
